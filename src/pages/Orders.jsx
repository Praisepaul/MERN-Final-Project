import React from 'react'
import {GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Inject, Edit } from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItems, ordersGrid } from '../assets/dummy'
import { Header } from '../components'
const Orders = () => {
  return (
    <div className='m-2 md:m-1 p-2 md:p-1 bg-white rounded-3xl' style={{overflowX :'hidden'}}>
      <Header category="Page" title="Orders" />
      <GridComponent id='gridcomp'
       dataSource={ordersData} 
       allowPaging
       allowFiltering
       allowSorting
       allowPdfExport
       allowSelection>
        <ColumnsDirective>
        {ordersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit]}/>
      </GridComponent>
    </div>
  )
}

export default Orders