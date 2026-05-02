"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, X } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

const ResumeModal = ({ isOpen, onClose, resumeUrl }: ResumeModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] flex flex-col p-0 overflow-hidden bg-card border-primary/20">
        <DialogHeader className="p-6 border-b border-border flex flex-row items-center justify-between space-y-0">
          <div>
            <DialogTitle className="text-xl font-display font-bold">Resume Preview</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Akshith Sai Kondamadugu - AI/ML Engineer
            </DialogDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex gap-2 border-primary/20 hover:bg-primary/10"
              onClick={() => window.open(resumeUrl, '_blank')}
            >
              <ExternalLink size={16} />
              Open in New Tab
            </Button>
            <a 
              href={resumeUrl} 
              download="AkshithSai_Resume.pdf"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 gap-2"
            >
              <Download size={16} />
              Download
            </a>
          </div>
        </DialogHeader>
        
        <div className="flex-1 bg-muted/30 relative">
          <iframe 
            src={`${resumeUrl}#toolbar=0`} 
            className="w-full h-full border-none"
            title="Resume Preview"
          />
        </div>

        <DialogFooter className="p-4 border-t border-border sm:justify-center">
          <p className="text-xs text-muted-foreground text-center">
            Can't see the preview? <a href={resumeUrl} target="_blank" rel="noreferrer" className="text-primary underline">Click here to open directly</a>.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;