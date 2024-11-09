import React from 'react'
import { css, html } from 'react-strict-dom'

const styles = css.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalDialog: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  heading: {
    fontFamily: 'GeistBold',
  },
  heading1: {
    fontSize: 24,
    marginBottom: 10,
  },
  heading2: {
    fontSize: 20,
    marginBottom: 10,
  },
  heading3: {
    fontSize: {
      default: 16,
      '@media (min-width: 701px)': 18,
    },
    marginBottom: 10,
  },
})

export default function Index() {
  const [showModal, setShowModal] = React.useState(false)

  return (
    <html.main style={styles.container}>
      <html.h1 style={[styles.heading, styles.heading1]}>Heading 1</html.h1>
      <html.h2 style={[styles.heading, styles.heading2]}>Heading 2</html.h2>
      <html.h3 style={[styles.heading, styles.heading3]}>Heading 3</html.h3>

      <html.button onClick={() => setShowModal(true)}>Click me</html.button>

      {showModal && (
        <html.div style={styles.modal}>
          <html.div style={styles.modalDialog}>
            <html.h2>Modal</html.h2>
            <html.button onClick={() => setShowModal(false)}>Close</html.button>
          </html.div>
        </html.div>
      )}
    </html.main>
  )
}
