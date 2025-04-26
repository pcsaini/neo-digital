"use client";
import {
  Table,
  TableBody, TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Mail, PhoneCall} from "lucide-react";
import {format} from "date-fns";
export function EnquiresList({ enquires }: { enquires: any[] }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Enquires</h2>

        {enquires.length === 0 ? (
          <p className="text-muted-foreground">No enquires found</p>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">
              {enquires.length} enquiry{enquires.length === 1 ? "" : "s"}
            </span>
          </div>
        )}
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Customer</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {enquires.length === 0 ? (<TableRow>
              <TableCell colSpan={5} className="text-center h-32">No enquiries found</TableCell>
            </TableRow>) : (enquires.map((enquiry: any) => (
                <TableRow key={enquiry.id}>
                  <TableCell className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {enquiry.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{enquiry.name}</div>
                      <div className="text-xs text-muted-foreground truncate max-w-[180px]">
                        {enquiry.message}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{enquiry.service?.name || "General"}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Mail className="mr-1 h-3 w-3"/>
                        {enquiry.email || "N/A"}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <PhoneCall className="mr-1 h-3 w-3"/>
                        {enquiry.phone || "N/A"}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{format(new Date(enquiry.createdAt), "MMM d, yyyy")}</TableCell>
                </TableRow>)))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
