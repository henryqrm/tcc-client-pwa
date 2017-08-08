<template>
    <f7-page>
        <f7-navbar title="About" back-link="Back" sliding></f7-navbar>
        <f7-block-title>Selecione a mesa</f7-block-title>
        <f7-block inner>
            <p>Descrição</p>
        </f7-block>
        <f7-list media-list>
            <f7-list-item title="Salão principal" divider></f7-list-item>
            <f7-list-item link="/" title="Mesa 1" badge="2/2" text="Fazendo pedido" badge-color="blue">
                <div slot="media">
                    <f7-chip bg="red">
                    </f7-chip>
                </div>
            </f7-list-item>
            <f7-list-item link="/" title="Mesa 2" badge="3/4" text="Esperando" badge-color="blue">
                <div slot="media">
                    <f7-chip bg="red">
                    </f7-chip>
                </div>
            </f7-list-item>
            <f7-list-item link="/" title="Mesa 3" badge="5/5" text="Livre" badge-color="blue">
                <div slot="media">
                    <f7-chip bg="green">
                    </f7-chip>
                </div>
            </f7-list-item>
            <f7-list-item link="/" title="Mesa 4" badge="1/2" text="Livre" badge-color="blue">
                <div slot="media">
                    <f7-chip bg="green">
                    </f7-chip>
                </div>
            </f7-list-item>
            <f7-list-item title="Copa" divider></f7-list-item>
            <f7-list-item link="/" title="Mesa 5" badge="2/2" text="Esperando" badge-color="blue">
                <div slot="media">
                    <f7-chip bg="red">
                    </f7-chip>
                </div>
            </f7-list-item>
            <f7-list-item link="/" title="Mesa 6" badge="4/6" text="Livre" badge-color="blue">
                <div slot="media">
                    <f7-chip bg="green">
                    </f7-chip>
                </div>
            </f7-list-item>
            <f7-list-item link="/" title="Mesa 7" badge="1/2" text="Esperando" badge-color="blue">
                <div slot="media">
                    <f7-chip bg="red">
                    </f7-chip>
                </div>
            </f7-list-item>
            <f7-list-item link="/" title="Mesa 8" badge="2/4" text="Esperando" badge-color="blue">
                <div slot="media">
                    <f7-chip bg="red">
                    </f7-chip>
                </div>
            </f7-list-item>
        </f7-list>
    </f7-page>
</template>

<script>
export default {};
</script>
