import React, { Component, Fragment } from 'react';
import Guest from './containers/layouts/Guest';


class App extends Component {
  render() {
    return (
      
      // Default semua pengunjung website adalah guest,
      // Tugas utamanya juga harus bisa ngecek apakah nanti cookies nya masih belum expired ga?
      // Kalau tidak valid, arahkan ke halaman Guest


      <Guest />
    );
  }
}

export default App;
