import React,{Component, Fragment} from 'react'
import HeaderAll from '../CommonComp/HeaderAll'
import Footer from '../CommonComp/Footer'





import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
/* import ProductService from '../service/ProductService'; */
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

class ManageUser extends Component{
    /* tableFields = {
        id: null,
        name: '',
        emailId: '',
        contactNo: 0,
        role: '',
    }; */
    constructor(props) {
        super(props);

    this.state = {
    id: 1,
    organizationName: "techm",
    email: "uk00477186@techmahindra.com",
    password: "Abd@sct34",
    contactPerson: "Urvashi",
    phoneNumber: "1234567898",
    gstin: ""
   }
}
    render(){
        const header = (
            <div className="table-header d-flex justify-content-between ">
               
                <div className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText type="search" placeholder="Search..." />
                </div>
                <div className="">
                    <button className="btn lightBlue mr-2">Add User</button>
                    <button className="btn btn-default">Delete User</button>
                </div>
            </div>
        );
       
        return(
            <Fragment>
                <div className="content">
                    {/*  Header */}
                    <HeaderAll></HeaderAll>
                    {/* Main Content on the page */}
                    <div className="content_section main">
                        <div className="mt-3">
                            <h5>Manage User</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                            <section className="white-middle-section mt-4">
                                <div className="datatable-crud-demo">
                                <div className="card">
                                <DataTable ref={(el) => this.dt = el} value={this.state.products} selection={this.state.selectedProducts} onSelectionChange={(e) => this.setState({ selectedProducts: e.value })}
                                    dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                                    globalFilter={this.state.globalFilter}
                                    header={header}>

                                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                                    <Column field="id" header="#" sortable></Column>
                                    <Column field="contactPerson" header="Name" sortable></Column>
                                    <Column field="email" header="Email Id"></Column>
                                    <Column field="phoneNumber" header="Contact" body={this.priceBodyTemplate} sortable></Column>
                                    <Column field="role" header="Role" sortable></Column>
                                    <Column body={this.actionBodyTemplate} header="Action"></Column>
                                </DataTable>
                                </div>
                                </div>
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