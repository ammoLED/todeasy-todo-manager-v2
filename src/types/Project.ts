import React from "react";

import { Task } from "types";

export default interface Project {
    img?: string | React.ReactElement
    title: string // As ID
    tasks: Task[]
    status: ProjectStatus
    expiresAt?: number
}

export type ProjectStatus = "open" | "closed" | "finished" | "expired"