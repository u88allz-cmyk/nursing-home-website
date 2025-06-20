import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: error.errors[0]?.message || "입력 정보를 확인해 주세요." 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "상담 신청 중 오류가 발생했습니다." 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        message: "연락처 목록을 가져오는 중 오류가 발생했습니다." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
