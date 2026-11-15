import { NativeTabs } from 'expo-router/build/native-tabs/NativeTabs.js'

const _layout = () => {
  return (
    <NativeTabs labelStyle={
      {
        fontFamily: 'Tiny5Duo-Regular'
      }
    }>
      <NativeTabs.Trigger name='StockRequest'>
        <NativeTabs.Trigger.Icon sf={'list.clipboard'} md={'assignment'} />
        <NativeTabs.Trigger.Label >Stock Requests</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name='Distributions'>
        <NativeTabs.Trigger.Icon sf={'truck.box'} md={'local_shipping'} />
        <NativeTabs.Trigger.Label >Distributions</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

    </NativeTabs>
  )
}

export default _layout