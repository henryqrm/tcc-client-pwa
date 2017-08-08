<template>
  <f7-page>
    <f7-navbar title="Home" back-link="Back" sliding></f7-navbar>
    <f7-block-title>Navigation</f7-block-title>
    <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/form/" title="Form"></f7-list-item>
    </f7-list>
    <f7-block-title>Side Panels</f7-block-title>
    <f7-block>
      <f7-grid>
        <f7-col width="50">
          <f7-button open-panel="left">Left Panel</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button open-panel="right">Right Panel</f7-button>
        </f7-col>
      </f7-grid>
    </f7-block>
    <f7-block-title>Modals</f7-block-title>
    <f7-block>
      <f7-grid>
        <f7-col width="50">
          <f7-button open-popup="#popup">Popup</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button open-login-screen="#login-screen">Login Screen</f7-button>
        </f7-col>
      </f7-grid>
    </f7-block>
    <f7-block inner>
      <p>
        Home
      </p>
    </f7-block>
  </f7-page>
</template>
<script>
export default {};
</script>

