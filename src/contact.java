import java.io.*;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.util.ArrayList;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.WebServlet;

@WebServlet("/contact")
public class contact extends HttpServlet {

    public void service(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        try {
            String num_match = req.getParameter("num_match");
            String eq1 = req.getParameter("eq1");
            String eq2 = req.getParameter("eq2");
            String jour = req.getParameter("jour");
            String sc1 = req.getParameter("sc1");
            String sc2 = req.getParameter("sc2");
    
            int Inum_match=0;
            int Ieq1=0;
            int Ieq2=0;
            Date Ijour= Date.valueOf(jour);
            int Isc1=0;
            int Isc2=0;

            try {
                int s1 = Integer.valueOf(num_match);
                int s2 = Integer.valueOf(eq1);
                int s3 = Integer.valueOf(eq2);
                int s5 = Integer.valueOf(sc1);
                int s6 = Integer.valueOf(sc2);

                Inum_match=s1;
                Ieq1=s2;
                Ieq2=s3;
                Isc1=s5;
                Isc2=s6;
            } catch (Exception e) {
                 Inum_match=0;
                 Ieq1=0;
                 Ieq2=0;
                 Isc1=0;
                 Isc2=0;
            }


        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        res.sendRedirect("/vide/ListeRencontres");
    }
}
