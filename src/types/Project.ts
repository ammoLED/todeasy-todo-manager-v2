import React from "react";

import { Task } from "types";

export default interface Project {
    img?: string
    title: string // As ID
    status: ProjectStatus
    tasks: Task[]
    createdAt: number
    expiresAt?: number
}

export type ProjectStatus = "open" | "closed" | "finished" | "expired"