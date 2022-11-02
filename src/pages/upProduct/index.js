import AddArticles from '~/component/Artitcles/AddArticles';
import Artilcles from '~/component/Artitcles/Artilcles';

function Following() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <Artilcles />
                </div>
                <div className="col-md-2">
                    <AddArticles />
                </div>
            </div>
        </div>
    );
}
export default Following;
