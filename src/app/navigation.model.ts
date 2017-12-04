export class NavigationModel
{
    public model: any[];

    constructor()
    {
        this.model = [
            {
                'id'      : 'applications',
                'title'   : 'Applications',
                'type'    : 'group',
                'children': [
                    {
                        'id'   : 'clientes',
                        'title': 'Clientes',
                        'type' : 'item',
                        'icon' : 'contact_mail',
                        'url'  : '/apps/cliente',
                        'badge': {
                            'title': 25,
                            'bg'   : '#F44336',
                            'fg'   : '#FFFFFF'
                        }
                    },
                    {
                        'id'   : 'producto',
                        'title': 'Producto',
                        'type' : 'item',
                        'icon' : 'local_drink',
                        'url'  : '/producto',
                        'badge': {
                            'title': 25,
                            'bg'   : '#F44336',
                            'fg'   : '#FFFFFF'
                        }
                    },
                    {
                        'id'   : 'abono',
                        'title': 'Abonos',
                        'type' : 'item',
                        'icon' : 'shoping_cart',
                        'url'  : '/abono',
                        'badge': {
                            'title': 25,
                            'bg'   : '#F44336',
                            'fg'   : '#FFFFFF'
                        }
                    }
                    
                ]
            }
        ];
    }
}
