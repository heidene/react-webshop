import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/checkout')({
  component: () => <div>Hello /checkout!</div>
})