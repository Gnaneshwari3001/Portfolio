import { RequestHandler } from "express";

export const handleResume: RequestHandler = (_req, res) => {
  const pdf = `%PDF-1.1\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 300 144] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n4 0 obj\n<< /Length 81 >>\nstream\nBT\n/F1 18 Tf\n72 110 Td\n(Gnaneshwari Sarla — Resume) Tj\n72 90 Td\n(Contact: gnaneshwarisarla001@gmail.com) Tj\nET\nendstream\nendobj\n5 0 obj\n<< /Type /Font /Subtype /Type1 /Name /F1 /BaseFont /Helvetica >>\nendobj\nxref\n0 6\n0000000000 65535 f \n0000000010 00000 n \n0000000061 00000 n \n0000000116 00000 n \n0000000263 00000 n \n0000000461 00000 n \ntrailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n548\n%%EOF`;

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=Gnaneshwari_Sarla.pdf",
  );
  res.send(pdf);
};
