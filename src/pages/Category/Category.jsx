import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import products from '../../utils/products.json'
import ProductListSidebar from '../../components/ProductList/ProductListSidebar';
import ProductList from '../../components/ProductList/ProductList';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {},
            items: [],
            filteredItems: []
        }
    }

    filterProducts(lowerLimit, upperLimit) {
        const filteredItems = this.state.items.filter((product) => product.price >= lowerLimit && product.price < upperLimit);
        this.setState({ filteredItems });
    }

    componentDidMount() {
        const { match } = this.props;
        const categoryName = match.params.categoryName;
        this.setState({
            category: products[categoryName],
            items: products[categoryName].items,
            filteredItems: products[categoryName].items
        });
    }

    render() {
        return (
            <Layout>
                <div className="content-min-height container-fluid container-min-max-width">
                    <h2>{ this.state.category.name }</h2>
                    <div className="row">
                        <ProductListSidebar filterProducts={(low, high) => this.filterProducts(low, high)}/>
                        <ProductList products={this.state.filteredItems} />
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Category;