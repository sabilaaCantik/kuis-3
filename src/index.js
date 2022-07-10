import ReactDOM from "react-dom/client";

function Product (props){
    return (<h4>{props}</h4>,
    <button
      onClick={() => {
        return alert(`Produk Ini Bernama ${props.name}`);
      }}
    >
    {props.name}
    </button>
    );
}

function Home(){
    return(
        <Product name = "seblak" />,
        <Product name = "Batagor" />,
        <Product name = "Cuanki" />
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);