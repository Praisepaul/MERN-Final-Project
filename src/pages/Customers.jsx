import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../assets/dummy'
import { Header } from '../components'
const Customers = () => {
  return (
    <div className='m-2 md:m-1 p-2 md:p-1 bg-white rounded-3xl' style={{overflowX :'hidden'}}>
      <Header category="Page" title="Customers" />
      <GridComponent
       dataSource={customersData} 
       allowPaging
       allowFiltering
       allowSorting
       allowSelection
       toolbar={['Delete', 'Add', 'Edit']}
       editSettings={{allowDeleting: true, allowEditing: true, allowAdding: true}}
       width="auto"
       >
        <ColumnsDirective>
        {customersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject services={[Toolbar, Sort, Selection, Filter, Page, Edit]}/>
      </GridComponent>
    </div>
  )
}

export default Customers