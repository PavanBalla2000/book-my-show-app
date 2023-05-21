import logo from './logo.svg';
import './App.css';


const bookMyShowData = [
    {
        imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC8xMCAgOC40SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00353721-xfzhwcfulv-portrait.jpg',
        cinemaName: 'Bichagadu 2',
        certificate: 'UA',
        languages: 'Telugu',
        rating: '8',

    },
    {
        imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgMjkuOUsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00122562-lrytmektpf-portrait.jpg',
        cinemaName: 'Fast X',
        certificate: 'UA',
        languages: 'English, Hindi, Telugu',
        rating: '9',

    },
    {
        imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny41LzEwICAzLjhLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00341806-pmseyqvsfl-portrait.jpg',
        cinemaName: 'Anni Manchi Sakunamule',
        certificate: 'U',
        languages: 'Telugu',
        rating: '',

    },
    {
        imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICAxODguNEsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00343918-gurcxtxnwv-portrait.jpg',
        cinemaName: 'The Kerala Story',
        certificate: 'A',
        languages: 'Hindi, Malayalam, Telugu',
        rating: '',

    },
    {
        imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4zLzEwICAyMC45SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00354148-nkpqqunxxe-portrait.jpg',
        cinemaName: '',
        certificate: '',
        languages: '',
        rating: '',

    },


]

function App() {
  return (
   <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
    {
      bookMyShowData.map((cinemaCard) => {
        return (
          <div>
            <img width={200} src={cinemaCard.imageUrl} alt="" />
            <h3>{cinemaCard.cinemaName}</h3>
            <p>{cinemaCard.certificate}</p>
            <p>{cinemaCard.languages}</p>
          </div>
        )
      })
    }
   </div>
  );
}

export default App;
