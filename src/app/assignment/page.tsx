import { Metadata } from 'next'
import AssignmentContent from '@/components/AssignmentContent'

export const metadata: Metadata = {
  title: 'Assignment Overview - Assessment',
  description: 'Overview of completed requirements and performance optimizations for the project',
}

export default function AssignmentPage() {
  return <AssignmentContent />
}
