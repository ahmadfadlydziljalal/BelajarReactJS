This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dynamic Component Menggunakan Props

- Mempelajari alur kerja ReactJS secara sistematis. Secara berurutan:
    - index.js di root app menjalankan ReactDOM.
    - Kemudian, ReactDOM menjalankan Statefull component yang ada di folder containers. Statefull bisa diartikan sebuah page. 
    - Kemudian, Statefull component menjalankan Steteless component yang ada di folder components.
    - Props (dalam bahasa indonesia artinya: peraga) adalah keyword didalam react untuk property-property
      dan digunakan untuk mem-passing data dari satu component ke component yang lain.
      Dalam kasus kita,
        src/container/Home.jsx mem-passing data { time, title, desc } ke
        src/components/YouTubeComp/YouTubeComp.jsx dengan cara:

            const YouTubeComp = (props) => {
                return (
                    {props.time},
                    {props.title},
                    {props.desc},
                );
            }