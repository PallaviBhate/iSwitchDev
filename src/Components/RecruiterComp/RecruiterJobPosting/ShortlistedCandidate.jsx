import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import ProductService from '../../../Services/ProductServices.js';
export default class ShortlistedCandidate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            candidates1: [],
            lazyTotalRecords:0,
            loading:false
        };
        
        this.statuses = [
            { label: 'In Stock', value: 'INSTOCK' },
            { label: 'Low Stock', value: 'LOWSTOCK' },
            { label: 'Out of Stock', value: 'OUTOFSTOCK' }
        ];

        this.productService = new ProductService();
        this.editingCellRows = {};
        this.originalRows = {};
        this.onVirtualScroll = this.onVirtualScroll.bind(this);
      
       
      
        this.onEditorSubmit = this.onEditorSubmit.bind(this);
        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.positiveIntegerValidator = this.positiveIntegerValidator.bind(this);
        this.emptyValueValidator = this.emptyValueValidator.bind(this);
        this.actionBodyTemplate=this.actionBodyTemplate.bind(this)
    }

    componentDidMount() {
        this.fetchProductData('candidates1');
    }

    fetchProductData(productStateKey) {
        this.setState({ loading: true });
       this.productService.getProductsSmall().then(data => this.setState({ [`${productStateKey}`]: data,loading:false}));
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
 
    
    positiveIntegerValidator(props) {
        const { rowData, field } = props;
        return this.isPositiveInteger(rowData[field]);
    }

    emptyValueValidator(props) {
        const { rowData, field } = props;
        return rowData[field].trim().length > 0;
    }

    isPositiveInteger(val) {
        let str = String(val);
        str = str.trim();
        if (!str) {
            return false;
        }
        str = str.replace(/^0+/, "") || "0";
        var n = Math.floor(Number(str));
        return n !== Infinity && String(n) === str && n >= 0;
    }

  
   
    onEditorSubmit(props) {
        const { rowIndex: index, field } = props;
        delete this.editingCellRows[index][field];
    }

  

  
    getStatusLabel(status) {
        switch (status) {
            case 'INSTOCK':
                return 'In Stock';

            case 'LOWSTOCK':
                return 'Low Stock';

            case 'OUTOFSTOCK':
                return 'Out of Stock';

            default:
                return 'NA';
        }
    }

    onEditorValueChange(productKey, props, value) {
        let updatedProducts = [...props.value];
        updatedProducts[props.rowIndex][props.field] = value;
        this.setState({ [`${productKey}`]: updatedProducts });
    }

    inputTextEditor(productKey, props, field) {
        return <InputText type="text"  value={props.rowData[field]} onChange={(e) => this.onEditorValueChange(productKey, props, e.target.value)} />;
    }

    // codeEditor(productKey, props) {
    //     return this.inputTextEditor(productKey, props, 'code');
        
    // }

    nameEditor(productKey, props) {
        return (this.inputTextEditor(productKey, props, 'name'));
       
                 
    }

    // priceEditor(productKey, props) {
    //     return this.inputTextEditor(productKey, props, 'price');
    // }

    click(){
        alert(`hii`)
    }
    
    statusEditor(productKey, props) {
        return (
            <Dropdown   value={props.rowData['inventoryStatus']} options={this.statuses} optionLabel="label" optionValue="value"
                onChange={(e) => this.onEditorValueChange(productKey, props, e.value)}  onClick={this.click} style={{ width: '100%' }} placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <span className={`product-badge status-${option.value.toLowerCase()}`}>{option.label}</span>
                }} />
        );
    }

    statusBodyTemplate(rowData) {
        return this.getStatusLabel(rowData.inventoryStatus);
    }
    downLoadResume(){
        alert(`Hii`)
    }

    actionBodyTemplate(rowData) {
        return (
            <>
               
                <a href="" onClick={this.downLoadResume}><img alt="download" src="../images/ActiveJob-JobDetails/Group 555.svg"></img> Download Resume</a>
               
                
            </>
        );
    }


    render() {
        return (
            <div className="datatable-editing-demo">
                <Toast ref={(el) => this.toast = el} />

                <div className="card">
                  
                    <DataTable value={this.state.candidates1} editMode="cell" className="editable-cells-table" scrollable scrollHeight="300px" lazy rows={15} loading={this.state.loading}
                            virtualScroll virtualRowHeight={50} onVirtualScroll={this.onVirtualScroll} totalRecords={this.state.lazyTotalRecords} >
                                  <Column field="id" header=""  style={{width:'5%'}}   loadingBody={this.loadingText1}></Column> 
                        <Column field="Candidate" header="Candidates" style={{width:'15%'}}loadingBody={this.loadingText1} ></Column>
                        <Column field="InterviewStatus" header="Interview Status" style={{width:'15%'}} loadingBody={this.loadingText1} ></Column>
                        <Column field="Comments" header="Comments"style={{width:'15%'}}  loadingBody={this.loadingText1} ></Column>
                        <Column field="LastUpdated" header="Last Updated" style={{width:'15%'}}  loadingBody={this.loadingText1} ></Column>
                        <Column header="Action" body={this.actionBodyTemplate} loadingBody={this.loadingText1}><img alt="download" src="../images/ActiveJob-JobDetails/iconfinder_Edit-01_1976055.svg"></img> </Column>
                    </DataTable>
                </div>
               
                <br/>
                showing: {[this.state.candidates1.length]} items

            </div>
        );
    }
}
                 
