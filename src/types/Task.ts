export default interface Task {
    id: string
    title: string
    descr?: string
    completed: boolean
    createdAt: number 
    expiresAt?: number
}