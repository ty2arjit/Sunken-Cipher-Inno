"use client";
import { Card,CardContent,CardFooter,CardHeader } from "../ui/card";
import { Header } from "./header";
 export const CardWrapper = ({
    children,
    headerLabel,
  }) => {
    return (
      <Card className="w-[35%]  bg-slate-900 text-slate-50 rounded-lg shadow-lg shadow-cyan-600/60">
        <CardHeader >
            <Header label={headerLabel} />
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    );
  };

