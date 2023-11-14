import React from 'react'
import {GridComponent, ColumnsDirective, Toolbar, Search, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Inject, Edit } from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItems, ordersGrid } from '../assets/dummy'
import { Header } from '../components'
const Stocks = () => {
  return (
    <div className='m-2 md:m-1 p-2 md:p-1 bg-white rounded-3xl' style={{overflowX :'hidden'}}>
      <Header category="Page" title="Stocks" />
      <GridComponent id='gridcomp'
       dataSource={ordersData} 
       allowPaging
       allowFiltering
       allowSorting
       allowPdfExport
       allowSelection
       toolbar={['Search']}
       width="auto"
       >
        <ColumnsDirective>
        {ordersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject services={[Toolbar, Resize, Search, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit]}/>
      </GridComponent>
    </div>
  )
}

export default Stocks