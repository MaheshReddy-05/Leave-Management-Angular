package com.wavemaker.filter;

import com.wavemaker.util.CookieStore;
import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.util.logging.Logger;

@WebFilter(urlPatterns = {"/employees", "/gender","/recent_leaves", "/leaves_summary", "/leave_request", "/logout", "/holidays",
        "/employee_had_team","/team_leaves_summary"})
public class AuthenticationFilter implements Filter {

    private static final Logger LOGGER = Logger.getLogger(AuthenticationFilter.class.getName());

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
            throws IOException, ServletException {

        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;

        String origin = request.getHeader("Origin");
        if (origin != null && (origin.equals("http://127.0.0.1:4200") || origin.equals("http://localhost:4200"))) {
            response.setHeader("Access-Control-Allow-Origin", origin);
            response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE, PUT, PATCH");
            response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
            response.setHeader("Access-Control-Allow-Credentials", "true");
        }

        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
            response.getWriter().flush();
            return;
        }

        HttpSession session = request.getSession(false);
        if (session == null) {
            LOGGER.info("No session found, sending unauthorized response.");
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("{\"error\": \"Session expired or not authenticated\"}");
            response.getWriter().flush();
            return;
        }

        Integer employeeId = (Integer) session.getAttribute("AuthCookie");

        if (employeeId == null || employeeId == -1 || CookieStore.getCookieValue(employeeId) == null) {
            LOGGER.info("Failed authentication, sending unauthorized response.");
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("{\"error\": \"Invalid authentication\"}");
            response.getWriter().flush();
            return;
        }

        filterChain.doFilter(request, response);
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {}

    @Override
    public void destroy() {}
}
