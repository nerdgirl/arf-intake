import {useWorkflowMetadata} from '../../lib/workflow/metadata'
import {inferMetadataState} from '../../lib/workflow/helpers'
import {states} from '../../config/workflow'

function publishedBadge(docInfo) {
  if (!docInfo.published) {
    return null
  }

  return {
    label: 'Adopted',
    title: 'Adopted',
    color: 'success'
  }
}

function workflowBadge(docInfo) {
  const metadata = useWorkflowMetadata(docInfo.id, inferMetadataState(docInfo))
  const state = states.find(s => s.id === metadata.data.state)

  if (!state) return null
  // if (!docInfo.draft && state.id === 'published') return null

  if (docInfo.draft && state.id === 'published') {
    return {
      label: 'Intake',
      title: 'Intake'
    }
  }

  if (state.id === 'published') {
    return null
  }

  return {
    label: state.title,
    title: state.title,
    color: state.color
  }
}

export function resolveWorkflowDocumentBagdes(/* docInfo */) {
  return [publishedBadge, workflowBadge]
}
