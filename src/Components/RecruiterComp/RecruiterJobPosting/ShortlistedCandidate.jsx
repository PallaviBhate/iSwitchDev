import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import ProductService from '../../../Services/ProductServices.js';
import InterviewStatusPopUp from './InterviewStatusPopUp.jsx';
import CandidateProfileToOpen from '../CandidateProfileToOpen'


export default class ShortlistedCandidate extends Component {
    // emptyProduct = {
    //     id: null,
    //     Candidate: '',
    //     InterviewStatus: '',
    //     Comments: '',
    //     LastUpdated: 0,
      
       
    // };
    constructor(props) {
        super(props);
        this.state = {
            candidates1: [],
          
            lazyTotalRecords:0,
            loading:false,
            userDialog: false,
        };

        this.productService = new ProductService();
        this.editStatus = this.editStatus.bind(this);
        this.InterviewStatusBodyTemplete=this.InterviewStatusBodyTemplete.bind(this)
        this.editingCellRows = {};
        this.originalRows = {};
        this.onVirtualScroll = this.onVirtualScroll.bind(this);
        this.actionBodyTemplate=this.actionBodyTemplate.bind(this)
    }

    componentDidMount() {
      
        this.setState({ loading: true });
       this.productService.getProductsSmall().then(data => this.setState({candidates1: data,loading:false}));
        setTimeout(() => {
            this.setState({
                customers: this.loadChunk(0, 40),
                lazyTotalRecords: 500
            });
        }, 250);
    }
    loadChunk(index, length) {
        let chunk = [];
        for (let i = 0; i < length; i++) {
            chunk[i] = { ...this.state.candidates1[i]};
        }

        return chunk;
    }

    onVirtualScroll(event) {
        //for demo purposes keep loading the same dataset
        //in a real production application, this data should come from server by building the query with LazyLoadEvent options
        setTimeout(() => {
            //last chunk
            if (event.first ===20) {
                this.setState({
                    candidates1: this.loadChunk(event.first, 5)
                });
            }
            else {
                this.setState({
                    candidates1: this.loadChunk(event.first, event.rows)
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
 
   

  
    
    onEditStatusModalRef = (obj) => {
    this.showModal = obj&&obj.showModal;
    }
    
    editStatus = () => {
    this.showModal();
    }
   
    click(){
        alert(`hii`)
    }
    
    
    downLoadResume(){
        alert(`Hii`)
    }

    nameBodyTemplate(rowData) {
        return (
            <>
            	<div className="custom"   >
                       <Link to= "/candidateProfileToOpen"> <h5 id="name1">{rowData.Candidate}</h5> </Link>
                        <p id="body1">{<span>Software developer at TCS</span>}</p>		
                        <i className="pi pi-envelope mr-2"></i>{<label>johndoe@tcs.com</label>}<br></br>
                        <i className="pi pi-mobile mr-2"></i>{<label>+91 1234567890</label>}<br></br>
                        <i className="pi pi-map-marker mr-2"></i>{<label>Mumbai,India</label>}
                </div>
                 
               
              
            </>
        );
    }

    actionBodyTemplate() {
        return (
            <>
               
                <a href="" onClick={this.downLoadResume}><img  src="../images/ActiveJob-JobDetails/Group 555.svg"></img> Download Resume</a>
               
                
            </>
        );
    }

    InterviewStatusBodyTemplete(rowData){
        return(
            <>
              <InterviewStatusPopUp ref={this.onEditStatusModalRef} ></InterviewStatusPopUp>

                <span className="mr-2">{rowData.InterviewStatus} </span>
                <img src="../images/ActiveJob-JobDetails/iconfinder_Edit-01_1976055.svg" onClick={()=> this.editStatus()}></img>
               

            </>
        )
    }


    render() {
        return (
            <div className="datatable-editing-demo">
                <Toast ref={(el) => this.toast = el} />
                
                <div className="Show">Total Result {[this.state.candidates1.length]} </div>

                <div className="card">
                  
                    <DataTable value={this.state.candidates1} editMode="cell" className="editable-cells-table"  scrollable scrollHeight="520px" lazy rows={15} loading={this.state.loading}
                            virtualScroll virtualRowHeight={50} onVirtualScroll={this.onVirtualScroll} totalRecords={this.state.lazyTotalRecords} >
                                  <Column field="id" header=""  style={{width:'5%'}}   loadingBody={this.loadingText1}></Column> 
                        <Column field="Candidate" header="Candidates "  body={this.nameBodyTemplate}style={{width:'20%'}}loadingBody={this.loadingText1} ></Column>
                        <Column field="InterviewStatus" header="Interview" body={this.InterviewStatusBodyTemplete}  style={{width:'15%'}} loadingBody={this.loadingText1} ></Column>
                        <Column field="Comments" header="Comments"style={{width:'15%'}}  loadingBody={this.loadingText1} > </Column>
                        <Column field="LastUpdated" header="Last Updated" style={{width:'15%'}}  loadingBody={this.loadingText1} ></Column>
                       <Column header="Action" body={this.actionBodyTemplate} loadingBody={this.loadingText1}></Column>
                    </DataTable>
                </div>
               
              

            </div>
        );
    }
}
                 
