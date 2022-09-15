const ProductItem = (params) => {
    const myDefaultClass = 'btn  btn-outline-dark mt-auto';
    let myBtnClass = 'btn-primary ' + myDefaultClass;
    const toggleClass = (e) => {
        e.preventDefault();
        console.log('entro');
        if (myBtnClass === 'btn-primary ' + myDefaultClass)
        {
            myBtnClass = 'btn-danger ' + myDefaultClass
        }
        else
        {
            myBtnClass = 'btn-sucess ' + myDefaultClass
        }

        return myBtnClass;
    }
    return (
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">Fancy Product</h5>
                        $40.00 - $80.00
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a onClick={toggleClass} className={myBtnClass} href="http://www.gmail.com">View options</a></div>
                </div>
            </div>
        </div>
    );
  }

  export default ProductItem;
