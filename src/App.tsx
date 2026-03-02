import { Icon } from './folk'

function App() {
  return (
    <div
      className="min-h-screen flex items-center justify-center gap-2"
      style={{ background: 'var(--folk-surface-default)' }}
    >
      <Icon name="check_circle" size={16} className="text-gray-11" />
      <span className="text-sm text-gray-11">folk-proto-template ready</span>
    </div>
  )
}

export default App
