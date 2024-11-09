import { css, html } from 'react-strict-dom';

const styles = css.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})


export default function Index() {
  return (
    <html.main style={styles.container}>
      <html.h1>Edit app/index.tsx to edit this screen.</html.h1>
    </html.main>
  );
}
