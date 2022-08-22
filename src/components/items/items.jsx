import { Component } from 'react'

import FiltersGroup from '../FiltersGroup'
import Itemcard from '../itemcard/itemcard'
import { ThreeDots } from 'react-loader-spinner'
import axios from 'axios'
import './items.css'


const categoryOptions = [
  {
    name: 'Recommended',
    categoryId: '1',
  },
  {
    name: 'North Indain',
    categoryId: '2',
  },
  {
    name: 'South Indian',
    categoryId: '3',
  },
  {
    name: 'Indian Snacks',
    categoryId: '4',
  },
  {
    name: 'Pizzas',
    categoryId: '5',
  },
  {
    name: 'Burgers',
    categoryId: '6',
  },
  {
    name: 'Sandwiches',
    categoryId: '7',
  },
]

const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Items extends Component {
  state = {
    productsList: [],
    apiStatus: apiStatusConstants.initial,
    activeOptionId: sortbyOptions[0].optionId,
    activeCategoryId: '',
    searchInput: '',
    activeRatingId: '',
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {
      activeOptionId,
      activeCategoryId,
      searchInput,
      activeRatingId,
    } = this.state
    const apiUrl = `https://swiggy-list.herokuapp.com/item`

    axios.get(apiUrl).then((res) => {
      const updatedData = res.data.map(each => ({
        title: each.name,
        brand: each.category,
        price: each.price,
        id: each._id,
        imageUrl: each.img_url

      }))
      this.setState({ productsList: updatedData, apiStatus: apiStatusConstants.success })
    }).catch((err) => console.log(err))



  }

  changeSortby = activeOptionId => {
    this.setState({ activeOptionId }, this.getProducts)
  }

  clearFilters = () => {
    this.setState(
      {
        searchInput: '',
        activeCategoryId: '',
        activeRatingId: '',
      },
      this.getProducts,
    )
  }

  changeRating = activeRatingId => {
    this.setState({ activeRatingId }, this.getProducts)
  }

  changeCategory = activeCategoryId => {
    this.setState({ activeCategoryId }, this.getProducts)
  }

  enterSearchInput = () => {
    this.getProducts()
  }

  changeSearchInput = searchInput => {
    this.setState({ searchInput })
  }

  renderFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="products failure"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  )

  renderProductsListView = () => {
    const { productsList, activeOptionId } = this.state
    const shouldShowProductsList = productsList.length > 0

    return shouldShowProductsList ? (
      <div className="mt-3 all-products-container container">
        <h4 className='mb-3 font-weight-bold'>Explore the best dishes</h4>

        <ul className="products-list row">
          {productsList.map(product => (
            <Itemcard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    ) : (
      <div className="no-products-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
          className="no-products-img"
          alt="no products"
        />
        <h1 className="no-products-heading">No Products Found</h1>
        <p className="no-products-description">
          We could not find any products. Try other filters.
        </p>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="products-loader-container">

      <ThreeDots color="#00BFFF" height={80} width={80} />
      {/* <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" /> */}
    </div>
  )

  renderAllProducts = () => {
    const { apiStatus } = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductsListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const { activeCategoryId, searchInput, activeRatingId } = this.state

    return (
      <div>
      <>
        
        <div className="col-12 mb-2 itembg bg-image shadow-2-strong">
          <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <div className="container textBox mt-4 d-flex align-items-center justify-content-center text-left  h-100">
              <div className="text-white">
                <h1 className='font-weight-bold text-center'>
                  “Food is our common ground, a universal experience.”
                </h1> <br />
                <h3 className='text-center'>James Beard</h3>

              </div>
            </div>

          </div>
        </div>
         
        <div className="all-products-section container">
          <FiltersGroup
            searchInput={searchInput}
            categoryOptions={categoryOptions}
            ratingsList={ratingsList}
            changeSearchInput={this.changeSearchInput}
            enterSearchInput={this.enterSearchInput}
            activeCategoryId={activeCategoryId}
            activeRatingId={activeRatingId}
            changeCategory={this.changeCategory}
            changeRating={this.changeRating}
            clearFilters={this.clearFilters}
          />
          {this.renderAllProducts()}
        </div>
      </>
      </div>
    )
  }
}

export default Items
