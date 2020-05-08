import React, { Component } from 'react';
import YouTubeComp from '../../components/YouTubeComp/YouTubeComp';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>My Youtube Components</h1>
                <hr />
                <YouTubeComp time="7.2" title="Beli Rumah" desc="Kumpulin duit" />
                {/* <YouTubeComp time="1.2" title="Beli Mobil" desc="Kumpulin cuan" />
                <YouTubeComp time="3.2" title="Beli Toko" desc="Kumpulin money" />
                <YouTubeComp time="7.8" title="Asuransi Sekolah" desc="Kumpulin fulus" />
                <YouTubeComp /> */}
            </div>
        );
    }
}

export default Home;