import React from 'react'
import { css, html } from 'react-strict-dom'

import { StyleProp, View, ViewStyle } from 'react-native'

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
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
}) as StyleProp<any>

export default function Index() {
  const [showModal, setShowModal] = React.useState(false)

  return (
    <html.main style={styles.container}>
      <html.h1 style={[styles.heading, styles.heading1]}>Heading 1</html.h1>
      <html.h2 style={[styles.heading, styles.heading2]}>Heading 2</html.h2>
      <html.h3 style={[styles.heading, styles.heading3]}>Heading 3</html.h3>

      <html.form>
        <html.input type='text' placeholder='Type something' />
        <html.input type='number' placeholder='Type something' />
        <html.input type='date' placeholder='Type something' />
        <html.input type='checkbox' placeholder='Type something' />
        <html.input type='radio' placeholder='Type something' />
      </html.form>

      {/** Example of passing styles to rnw components */}
      <View style={styles.box} />

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
