import React,{Component, Fragment} from 'react'
import HeaderAll from '../CommonComp/HeaderAll'
import Footer from '../CommonComp/Footer'

import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import ProductService from '../../Services/ProductService';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
/* import classNames from 'classnames'; */
//  import {Information} from './Information';
/* import { Toolbar } from 'primereact/toolbar'; */
/* import { FileUpload } from 'primereact/fileupload'; */
//  import { Toast } from 'primereact/toast';

class ManageUser extends Component{
    emptyProduct = {
        id: null,
        name: '',
        image: null,
        description: '',
        category: null,
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: 'INSTOCK'
    };
    constructor(props) {
        super(props);

        this.state = {
            id:null,
            // info:Information,
            selectedValue: null,

            products: null,
            productDialog: false,
            deleteProductDialog: false,
            deleteProductsDialog: false,
            product: this.emptyProduct,
            selectedProducts: null,
            submitted: false,
            globalFilter: null
        }

        this.productService = new ProductService();
        this.priceBodyTemplate = this.priceBodyTemplate.bind(this);
        this.ratingBodyTemplate = this.ratingBodyTemplate.bind(this);
        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.actionBodyTemplate = this.actionBodyTemplate.bind(this);

        this.openNew = this.openNew.bind(this);
        this.hideDialog = this.hideDialog.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.confirmDeleteProduct = this.confirmDeleteProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        
        this.confirmDeleteSelected = this.confirmDeleteSelected.bind(this);
        this.deleteSelectedProducts = this.deleteSelectedProducts.bind(this);
       
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputNumberChange = this.onInputNumberChange.bind(this);
        this.hideDeleteProductDialog = this.hideDeleteProductDialog.bind(this);
        this.hideDeleteProductsDialog = this.hideDeleteProductsDialog.bind(this);
    }

    componentDidMount() {
        this.productService.getProducts().then(data => this.setState({ products: data }));
       // this.productService.getProductsWithOrdersSmall().then(data => this.setState({ products: data }));
   }

    formatCurrency(value) {
       return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    openNew() {
       this.setState({
           product: this.emptyProduct,
           submitted: false,
           productDialog: true
       });
    }

    hideDialog() {
       this.setState({
           submitted: false,
           productDialog: false
       });
    }

    hideDeleteProductDialog() {
        this.setState({ deleteProductDialog: false });
    }

    hideDeleteProductsDialog() {
        this.setState({ deleteProductsDialog: false });
    }

    saveProduct() {
        let state = { submitted: true };

        if (this.state.product.name.trim()) {
            let products = [...this.state.products];
            let product = {...this.state.product};
            if (this.state.product.id) {
                const index = this.findIndexById(this.state.product.id);

                products[index] = product;
                // this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            }
            else {
                product.id = this.createId();
                product.image = 'product-placeholder.svg';
                products.push(product);
                this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            state = {
                ...state,
                products,
                productDialog: false,
                product: this.emptyProduct
            };
        }

        this.setState(state);
    }

    editProduct(product) {
        this.setState({
            product: { ...product },
            productDialog: true
        });
    }

    confirmDeleteProduct(product) {
        this.setState({
            product,
            deleteProductDialog: true
        });
    }

    deleteProduct() {
        let products = this.state.products.filter(val => val.id !== this.state.product.id);
        this.setState({
            products,
            deleteProductDialog: false,
            product: this.emptyProduct
        });
        // this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    }

    findIndexById(id) {
        let index = -1;
        for (let i = 0; i < this.state.products.length; i++) {
            if (this.state.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId() {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    exportCSV() {
        this.dt.exportCSV();
    }

    confirmDeleteSelected() {
        this.setState({ deleteProductsDialog: true });
    }

    deleteSelectedProducts() {
        let products = this.state.products.filter(val => !this.state.selectedProducts.includes(val));
        this.setState({
            products,
            deleteProductsDialog: false,
            selectedProducts: null
        });
        this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    }

    onCategoryChange(e) {
        let product = {...this.state.product};
        product['category'] = e.value;
        this.setState({ product });
    }

    onInputChange(e, name) {
        const val = (e.target && e.target.value) || '';
        let product = {...this.state.product};
        product[`${name}`] = val;

        this.setState({ product });
    }

    onInputNumberChange(e, name) {
        const val = e.value || 0;
        let product = {...this.state.product};
        product[`${name}`] = val;

        this.setState({ product });
    }

    priceBodyTemplate(rowData) {
        return this.formatCurrency(rowData.price);
    } 

    ratingBodyTemplate(rowData) {
        return <Rating value={rowData.rating} readonly cancel={false} />;
    }

    statusBodyTemplate(rowData) {
        return <span className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>;
    }

    actionBodyTemplate(rowData) {
        return (
            <>
               
                <i class="fa fa-pencil-square-o pr-3" aria-hidden="true" onClick={() => this.editProduct(rowData)}></i>
                <i class="fa fa-trash-o" aria-hidden="true" onClick={() => this.confirmDeleteProduct(rowData)}></i>
                {/* <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => this.editProduct(rowData)} /> 
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => this.confirmDeleteProduct(rowData)} />*/}
            </>
        );
    }



    render(){
        const paginatorLeft = <Button icon="pi pi-refresh"/>;
        const header = (
            <div className="table-header d-flex justify-content-between ">
               
                <div className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText type="search" placeholder="Search..." />
                </div>
                <div className="">
                    <button className="btn btn-blue mr-2">Add User</button>
                    <button className="btn btn-border">Delete</button>
                </div>
            </div>
        );

        const productDialogFooter = (
            <>
                <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={this.hideDialog} />
                <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={this.saveProduct} />
            </>
        );
        const deleteProductDialogFooter = (
            <>
                <Button label="No" icon="pi pi-times" className="p-button-text" onClick={this.hideDeleteProductDialog} />
                <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={this.deleteProduct} />
            </>
        );
        const deleteProductsDialogFooter = (
            <>
                <Button label="No" icon="pi pi-times" className="p-button-text" onClick={this.hideDeleteProductsDialog} />
                <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={this.deleteSelectedProducts} />
            </>
    
    
        );
       
        return(
            <Fragment>
                <div className="content">
                    {/*  Header */}
                    <HeaderAll></HeaderAll>
                    {/* Main Content on the page */}
                    <div className="content_section main">
                        <div className="mt-3">
                            <h4>Manage Users</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                            <section className="white-middle-section mt-4">                               
                                <div>                                
                                    <DataTable ref={(el) => this.dt = el} value={this.state.products} selection={this.state.selectedProducts} onSelectionChange={(e) => this.setState({ selectedProducts: e.value })}
                                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                                        globalFilter={this.state.globalFilter}
                                        header={header}>
                                        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                                        <Column field="name" header="Name" sortable></Column>
                                        <Column field="code" header="EmailId" sortable></Column>
                                        <Column field="price" header="Contact" body={this.priceBodyTemplate} sortable></Column>
                                        <Column field="inventoryStatus" header="role" body={this.statusBodyTemplate} sortable></Column>
                                        <Column header="Action" body={this.actionBodyTemplate}></Column>
                                    </DataTable>
                                </div>
                                <Dialog visible={this.state.productDialog} style={{ width: '450px' }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={this.hideDialog}>
                    
                                    <div className="p-field">
                                        <label htmlFor="description">Description</label>
                                        <InputTextarea id="description" value={this.state.product.description} onChange={(e) => this.onInputChange(e, 'description')} required rows={3} cols={20} />
                                    </div>

                                    <div className="p-field">
                                        <label className="p-mb-3">Category</label>
                                        <div className="p-formgrid p-grid">
                                            <div className="p-field-radiobutton p-col-6">
                                                <RadioButton id="category1" name="category" value="Accessories" onChange={this.onCategoryChange} checked={this.state.product.category === 'Accessories'} />
                                                <label htmlFor="category1">Accessories</label>
                                            </div>
                                            <div className="p-field-radiobutton p-col-6">
                                                <RadioButton id="category2" name="category" value="Clothing" onChange={this.onCategoryChange} checked={this.state.product.category === 'Clothing'} />
                                                <label htmlFor="category2">Clothing</label>
                                            </div>
                                            <div className="p-field-radiobutton p-col-6">
                                                <RadioButton id="category3" name="category" value="Electronics" onChange={this.onCategoryChange} checked={this.state.product.category === 'Electronics'} />
                                                <label htmlFor="category3">Electronics</label>
                                            </div>
                                            <div className="p-field-radiobutton p-col-6">
                                                <RadioButton id="category4" name="category" value="Fitness" onChange={this.onCategoryChange} checked={this.state.product.category === 'Fitness'} />
                                                <label htmlFor="category4">Fitness</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-formgrid p-grid">
                                        <div className="p-field p-col">
                                            <label htmlFor="price">Price</label>
                                            <InputNumber id="price" value={this.state.product.price} onValueChange={(e) => this.onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                                        </div>
                                        <div className="p-field p-col">
                                            <label htmlFor="quantity">Quantity</label>
                                            <InputNumber id="quantity" value={this.state.product.quantity} onValueChange={(e) => this.onInputNumberChange(e, 'quantity')} integeronly />
                                        </div>
                                    </div>
                                </Dialog>

                                <Dialog visible={this.state.deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={this.hideDeleteProductDialog}>
                                    <div className="confirmation-content">
                                        <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem'}} />
                                        {this.state.product && <span>Are you sure you want to delete <b>{this.state.product.name}</b>?</span>}
                                    </div>
                                </Dialog>

                                <Dialog visible={this.state.deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={this.hideDeleteProductsDialog}>
                                    <div className="confirmation-content">
                                        <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem'}} />
                                        {this.state.product && <span>Are you sure you want to delete </span>}
                                    </div>
                                </Dialog>
                            </section>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>  
            </Fragment>
        )
    }
}

export default ManageUser