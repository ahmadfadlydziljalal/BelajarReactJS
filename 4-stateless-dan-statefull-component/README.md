This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Keterangan

Component dapat dibuat menggunakan dua cara dengan tipenya masing-masing.
Biasanya dalam develop dibuatkan foldernya masing-masing.

1. Functional Component / Stateless Component
    Folder : component
    Biasanya bersifat const.

2. Statefull Component
    Folder : container
    Biasanya bersifat class yang di extend dari React.Component

Masing-masing component bisa mempunyai css -nya masing-masing.
Hal yang perlu diperhatikan adalah tag class pada element HTML dirubah menjadi className.

Contohnya: 
        <p class="some-class">Ini adalah text</p> , menjadi
        <p className="some-class">Ini adalah text</p>
