

import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import ProgressBar from 'react-customizable-progressbar'
import { Column } from 'primereact/column';
import CustomerService from '../../../Services/CustomerServices.js';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
// import { InputText } from 'primereact/inputtext';
// import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
// import { CircularProgressbarWithChildren,} from "react-circular-progressbar";
 // import "react-circular-progressbar/dist/styles.css";

export default class MatchingCandidate extends Component {

    emptyProduct = {
        id: null,
        Candidate: '',
        skills: '',
        experience: '',
        availableFrom: 0,
        activity: '',
       
    };

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            productDialog: false,
            deleteProductDialog: false,
            product: this.emptyProduct,
            submitted: false,
            lazyTotalRecords:0,
            loading:false,
        };

        this.customerService = new CustomerService();
        this.onVirtualScroll = this.onVirtualScroll.bind(this);
        this.nameBodyTemplate = this.nameBodyTemplate.bind(this);
        this.countryBodyTemplate = this.countryBodyTemplate.bind(this);
        this.companyBodyTemplate = this.companyBodyTemplate.bind(this);
        this.dateBodyTemplate = this.dateBodyTemplate.bind(this);
        this.activityBodyTemplate = this.activityBodyTemplate.bind(this);
        this.actionBodyTemplate = this.actionBodyTemplate.bind(this);
        this.hideDialog = this.hideDialog.bind(this);
        this.confirmDeleteProduct = this.confirmDeleteProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.hideDeleteProductDialog = this.hideDeleteProductDialog.bind(this);
     
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.customerService.getCustomersLarge().then(data => this.setState({ products: data,loading:false }));
        setTimeout(() => {
            this.setState({
                products: this.loadChunk(0, 40),
                lazyTotalRecords: 500
            });
        }, 250);
    }
    loadChunk(index, length) {
        let chunk = [];
        for (let i = 0; i < length; i++) {
            chunk[i] = { ...this.state.products[i]};
        }

        return chunk;
    }

    onVirtualScroll(event) {
        //for demo purposes keep loading the same dataset
        //in a real production application, this data should come from server by building the query with LazyLoadEvent options
        setTimeout(() => {
            //last chunk
            if (event.first ===100) {
                this.setState({
                    products: this.loadChunk(event.first, 40)
                });
            }
            else {
                this.setState({
                    products: this.loadChunk(event.first, event.rows)
                });
            }
        }, 500);
    }

    loadingText1() {
       // return (
        //     <Loader 
        //     type="Circles" color="#00BFFF" height={80} width={80}>
        //    </Loader>
        // )
         return <span className="loading-text"></span>;
    }

    formatCurrency(value) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
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

    // editProduct(product) {
    //     this.setState({
    //         product: { ...product },
    //         productDialog: true
    //     });
    // }

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
        this.toast.show({ severity: 'success', summary: 'Successful', detail: 'User Deleted', life: 3000 });
    }

   
    confirmDeleteSelected() {
        this.setState({ deleteProductsDialog: true });
    }

  
    nameBodyTemplate(rowData) {
        return (
            <>
            	<div className="custom"   >
                        <h5 id="name1">{rowData.candidate}</h5>
                        <p id="body1">{<span>Software developer at TCS</span>}</p>		
                        <i className="pi pi-map-marker"></i>{<label>Mumbai,India</label>}
                </div>
                 
               
              
            </>
        );
    }

    countryBodyTemplate(rowData) {
        return (
            <>
               <span className="p-column-title"></span>
                {rowData.skills}
            </>
        );
    }

    companyBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title"></span>
                {rowData.experience}
            </>
        );
    }

    dateBodyTemplate(rowData) {
        return (
            <>
                <span className="p-column-title"></span>
                <span>{rowData.availableFrom}</span>
            </>
        );
    }

   

    activityBodyTemplate(rowData) {
    let percentage=rowData.activity
    return (
            <>
                    <span className="p-column-title"></span>
                    <ProgressBar className="circle"
						progress={percentage}
						radius={32}
						strokeWidth={3}
						strokeColor="#147AD6"
						steps={100}
						cut={20}
						trackStrokeWidth={2}
						progress={percentage}>
						<div className="indicator">
							<div>{percentage}%
							Match</div>
                        </div>
					</ProgressBar> 
             </>
        );
    }
   
    actionBodyTemplate(rowData) {
        return (
            <>
             <button className="btn btn-blue1 mr-2" onClick={() => this.editProduct(rowData)}>Invite</button>
             <button className="btn btn-border1" onClick={() => this.confirmDeleteProduct(rowData)}>Remove</button>
                
            </>
        );
    }

    render() {

        const deleteProductDialogFooter = (
            <>
                <Button label="No" icon="pi pi-times" className="p-button-text" onClick={this.hideDeleteProductDialog} />
                <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={this.deleteProduct} />
            </>
        );
       
        return (
            <div className="datatable-editing-demo">
                <Toast ref={(el) => this.toast = el} />
                
                <div className="Show">Total Result {[this.state.products.length]} </div>
               
                  <DataTable ref={(el) => this.dt = el} className="p-datatable-striped"  value={this.state.products} scrollable scrollHeight="520px" lazy rows={20} loading={this.state.loading}
                            virtualScroll virtualRowHeight={45} onVirtualScroll={this.onVirtualScroll} totalRecords={this.state.lazyTotalRecords} 
                    >
                         <Column field="id" header=""    style={{width:'5%'}}   loadingBody={this.loadingText1}></Column> 

                         <Column  field="candidate" header="Candidates"   style={{width:'20%'}} body={this.nameBodyTemplate} loadingBody={this.loadingText1} ></Column>
                        <Column field="skills" header="Skills"  style={{width:'15%'}} body={this.countryBodyTemplate}  loadingBody={this.loadingText1} />
                        <Column field="experience" header="Experience"  style={{width:'15%'}} body={this.companyBodyTemplate} loadingBody={this.loadingText1} />
                        <Column field="availableFrom" header="AvailableFrom"  style={{width:'10%'}} body={this.dateBodyTemplate} loadingBody={this.loadingText1} />
                        <Column field="activity" header="Match"  style={{width:'10%'}} body={this.activityBodyTemplate} loadingBody={this.loadingText1}/>
                        <Column header="Action" body={this.actionBodyTemplate}  style={{width:'20%'}} loadingBody={this.loadingText1}></Column>
                        
                        {/* <Column body={this.actionBodyTemplate} style={{width:'6%'}} loadingBody={this.loadingText1}></Column> */}
                    </DataTable>
          
                    
                    <Dialog visible={this.state.deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={this.hideDeleteProductDialog}>
                    <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem'}} />
                        {this.state.product && <span>Are you sure you want to delete <b>{this.state.product.name}</b>?</span>}
                    </div>
                </Dialog>
                <br/>
                showing: {this.state.products.length} items
            </div>
        );
    }
}