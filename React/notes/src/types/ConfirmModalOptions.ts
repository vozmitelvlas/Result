export interface ConfirmModalOptions {
    title: string,
    onConfirm: () => void | Promise<void>,
    onCancel?: () => void | Promise<void>,
}