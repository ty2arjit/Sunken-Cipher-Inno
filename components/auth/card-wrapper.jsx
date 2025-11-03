"use client";
import { Card,CardContent,CardFooter,CardHeader } from "../ui/card";
import { Header } from "./header";
 export const CardWrapper = ({
    children,
    headerLabel,
  }) => {
    return (
      <Card className="w-[35%] shadow-md">
        <CardHeader >
            <Header label={headerLabel} />
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    );
  };

