import React from 'react';
import { cn } from '@/src/lib/utils';

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleExtra?: React.ReactNode;
}

export const SidebarSection: React.FC<SidebarSectionProps> = ({ title, children, className, titleExtra }) => {
  return (
    <div className={cn("bg-panel-bg/40 border border-panel-border rounded-xl p-5 panel-blur", className)}>
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-base font-bold border-l-4 border-brand-blue pl-3 text-brand-blue tracking-widest uppercase">
          {title}
        </h3>
        {titleExtra}
      </div>
      {children}
    </div>
  );
};
