import React, { Component ,Fragment} from 'react';
import axios from 'axios';
import HeaderAll from '../CommonComp/HeaderAll'
import Footer from '../CommonComp/Footer'
import UserService from '../../Services/UserService.js';
import AddUser from '../ProviderComp/AddUser'
import EditUser from '../ProviderComp/EditUser'
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

 

//  import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';



class ManageUser extends Component{
    // emptyUser = {
    //     id:null,
    //     userName:'',
    //     email:'',
    //     contactNumber:'',
    //     userRole:''
    // };
    constructor(){
        super();

        this.state = {       

            users: null,
            userDialog: false,
            deleteUserDialog: false,
            deleteUsersDialog: false,
            user: {
                id:'',
                userName:'',
                email:'',
                contactNumber:'',
                userRole:''
            },
            selectedUsers: null,
            submitted: false,
            globalFilter: null
            
            
        }
        this.userService = new UserService();
        this.editUser = this.editUser.bind(this);
        this.confirmDeleteUser = this.confirmDeleteUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.onaAddUSerModalRef= this.onaAddUSerModalRef.bind(this);

        this.actionBodyTemplate = this.actionBodyTemplate.bind(this);
        this.hideDeleteUserDialog = this.hideDeleteUserDialog.bind(this);
        this.hideDeleteUsersDialog = this.hideDeleteUsersDialog.bind(this);
        this.deleteSelectedUsers = this.deleteSelectedUsers.bind(this);
        this.confirmDeleteSelected = this.confirmDeleteSelected.bind(this);
        
        }
        componentDidMount() {
            this.userService.getAllUser().then(data => this.setState({ users: data }));
          
       }

       componentDidUpdate(){

        this.userService.getAllUser().then(data => this.setState({ users: data }));

       }
       editUser(user){
        this.setState({
            user: { ...user },
            userDialog: true
        });
    }

       confirmDeleteUser(user) {
        this.setState({
            user,
            deleteUserDialog: true
        });
    }

    hideDeleteUserDialog() {
        this.setState({ deleteUserDialog: false });
    }
    deleteUser() {
        const options = {

            headers:{

                'Content-Type':'application/json'

            }

        };
        axios.delete("https://techm-jobzilla.herokuapp.com/jobs/user/userById?userId=" +this.state.user.id,options).then(Response=>{console.log("Success..",Response)

    }).catch(error=>{console.log("Error Occured...",error)})
    let users = this.state.users.filter(val => val.id !== this.state.user.id);

    this.setState({

        users,

        deleteUserDialog: false,
 

    });

    

    // this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });

}


    // deleteUser() {
    //     let users = this.state.users.filter(val => val.id !== this.state.user.id);
    //     this.setState({
    //         users,
    //         deleteUserDialog: false,
    //         user: this.emptyUser
    //     });
    //     // this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    // }

    hideDeleteUsersDialog() {
        this.setState({ deleteUsersDialog: false });
    }

    deleteSelectedUsers() {
        let users = this.state.users.filter(val => !this.state.selectedUsers.includes(val));
        this.setState({
            users,
            deleteUsersDialog: false,
            selectedUsers: null
        });
        // this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    }

    confirmDeleteSelected(User) {
        this.setState({ 
            deleteUsersDialog: true });
    }


       actionBodyTemplate(rowData) {
        return (
            <>
                <EditUser ref={this.onEditUserModalRef} ></EditUser>
                <i className="fa fa-pencil-square-o pr-3" aria-hidden="true"  onClick={() => this.editUser(rowData)} />
                <i className="fa fa-trash-o" aria-hidden="true" onClick={() => this.confirmDeleteUser(rowData)} />
            </>
        );
    }

    // onaAddUSerModalRef = ({showModal}) => {
    //     this.showModal = showModal;

    //  }
    onaAddUSerModalRef = (obj) => { 
        this.showModal = obj&&obj.showModal 
     }
     
     onAddUserClick = () => {
       this.showModal();
     }
     onEditUserModalRef = (obj) => {
        this.Model = obj&&obj.Model;
     }
     
     editUser =(user)=> {
      this.setState({
            user: { ...user },
            //userDialog: true  
        },()=> {console.log(this.state.user)});

         this.Model(user);
     }
       render(){

        const paginatorLeft = <Button icon="pi pi-refresh"/>;
        const header = (
            <div className="table-header d-flex justify-content-between ">
                <div className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText onInput={(e) => this.setState({ globalFilter: e.target.value })}type="search" placeholder="Search..." />
                </div>
                <div className="">
                <AddUser ref={this.onaAddUSerModalRef} ></AddUser>
                    <button className="btn btn-blue mr-2" onClick={this.onAddUserClick}>Add User</button>
                    <button className="btn btn-border" onClick={this.confirmDeleteSelected} disabled={!this.state.selectedUsers || !this.state.selectedUsers.length}>Delete</button>
                </div>
            </div>
        );
               
        

        const deleteUserDialogFooter = (
            <>
                <Button label="No" icon="pi pi-times" className="p-button-text" onClick={this.hideDeleteUserDialog} />
                <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={this.deleteUser} />
            </>
        );


        const deleteUsersDialogFooter = (
            <>
                <Button label="No" icon="pi pi-times" className="p-button-text" onClick={this.hideDeleteUsersDialog} />
                <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={this.deleteSelectedUsers} />
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
                            
               <DataTable ref={(el) => this.dt = el} className="p-datatable-striped " value={this.state.users} selection={this.state.selectedUsers} onSelectionChange={(e) => this.setState({ selectedUsers: e.value })} paginator={true} 
       paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
       currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" rows={5} rowsPerPageOptions={[5,10,15]}  removableSort={true} sortMode="multiple"
       globalFilter={this.state.globalFilter}
       header={header} >
                    

<Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
<Column field="id" header="#"  style={{width:'6%'}}  sortable></Column>
<Column field="userName" header="Name" style={{width:'15%'}} sortable></Column>
 <Column field="email" header="EmailId" style={{width:'25%'}} sortable></Column>
                       
 <Column field="contactNumber" header="Contact"  sortable></Column>
                        
                       
<Column field="userRole" header="Role"  style={{width:'8%'}} sortable></Column>
<EditUser ref={this.onaEditUSerModalRef} ></EditUser>
<Column header="Action" body={this.actionBodyTemplate}></Column>
                </DataTable>
           </div>

           <Dialog visible={this.state.deleteUserDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteUserDialogFooter} onHide={this.hideDeleteUserDialog}>
            <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem'}} />
                        {this.state.user && <span>Are you sure you want to delete <b>{this.state.user.name}</b>?</span>}
                    </div>
                </Dialog>

                <Dialog visible={this.state.deleteUsersDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteUsersDialogFooter} onHide={this.hideDeleteUsersDialog}>
                    <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem'}} />
                        {this.state.user && <span>Are you sure you want to delete </span>}
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
