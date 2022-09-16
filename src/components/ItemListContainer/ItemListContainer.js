const ItemListContainer = ({greetings}) => {
    return (
        <section className="bg-dark bg-gradient py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols justify-content-center">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">La Tiendita</h1>
                        <p className="lead fw-normal text-white-50 mb-0">{greetings}</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
  }

export default ItemListContainer;


