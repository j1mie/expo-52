import React from 'react'
import { css, html } from 'react-strict-dom'
import * as Font from 'expo-font'

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
    fontSize: 24,
    marginBottom: 10,
    fontFamily: 'GeistBold',
  },
})

export default function Index() {
  const [showModal, setShowModal] = React.useState(false)

  const loadedFonts = Font.getLoadedFonts()

  console.log(loadedFonts)

  return (
    <html.main style={styles.container}>
      <html.h1 style={styles.heading}>Hello world</html.h1>

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
