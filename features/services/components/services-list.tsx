"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Pencil, Trash2, Eye, PlusCircle } from "lucide-react"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Service } from "../types"
import {deleteService} from "@/features/services/actions/service-actions";
import {toast} from "sonner";

interface ServicesListProps {
    services: Service[]
}

export function ServicesList({ services }: ServicesListProps) {
    const router = useRouter()
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
    const [serviceToDelete, setServiceToDelete] = useState<string | null>(null)
    const [isDeleting, setIsDeleting] = useState(false)

    const handleDelete = async () => {
        if (!serviceToDelete) return

        try {
            setIsDeleting(true)
            const result = await deleteService(serviceToDelete)

            if (!result.success) {
                throw new Error(result.error || "Failed to delete service")
            }

            toast("Service deleted successfully")
        } catch (error) {
            console.error(error)
            toast(error instanceof Error ? error.message : "Something went wrong")
        } finally {
            setIsDeleting(false)
            setIsDeleteDialogOpen(false)
            setServiceToDelete(null)
        }
    }

    // Function to get status badge color
    const getStatusBadge = (status: string) => {
        switch (status) {
            case "published":
                return <Badge className="bg-green-500">Published</Badge>
            case "draft":
                return <Badge variant="outline">Draft</Badge>
            case "archived":
                return <Badge variant="secondary">Archived</Badge>
            default:
                return <Badge variant="outline">{status}</Badge>
        }
    }

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Services</h2>
                <Button onClick={() => router.push("/services/new")}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    New Service
                </Button>
            </div>

            {services.length === 0 ? (
                <div className="text-center p-8">
                    <p className="text-muted-foreground mb-4">No services found</p>
                    <Button onClick={() => router.push("/services/new")}>
                        Create your first service
                    </Button>
                </div>
            ) : (
                <div className="border rounded-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Created</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {services.map((service) => (
                                <TableRow key={service.id}>
                                    <TableCell className="font-medium">{service.name}</TableCell>
                                    <TableCell className="max-w-xs truncate">
                                        {service.description}
                                    </TableCell>
                                    <TableCell>{getStatusBadge(service.status)}</TableCell>
                                    <TableCell>
                                        {new Date(service.createdAt).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0">
                                                    <span className="sr-only">Open menu</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="h-4 w-4"
                                                    >
                                                        <circle cx="12" cy="12" r="1" />
                                                        <circle cx="12" cy="5" r="1" />
                                                        <circle cx="12" cy="19" r="1" />
                                                    </svg>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem
                                                    onClick={() => router.push(`/services/${service.id}`)}
                                                >
                                                    <Eye className="mr-2 h-4 w-4" />
                                                    View
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    onClick={() =>
                                                        router.push(`/services/${service.id}/edit`)
                                                    }
                                                >
                                                    <Pencil className="mr-2 h-4 w-4" />
                                                    Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    className="text-red-600"
                                                    onClick={() => {
                                                        setServiceToDelete(service.id)
                                                        setIsDeleteDialogOpen(true)
                                                    }}
                                                >
                                                    <Trash2 className="mr-2 h-4 w-4" />
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}

            <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the
                            service and all related data.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDelete}
                            disabled={isDeleting}
                            className="bg-red-600 hover:bg-red-700"
                        >
                            {isDeleting ? "Deleting..." : "Delete"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}