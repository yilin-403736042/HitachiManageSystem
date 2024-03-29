
/* JavaScript content from app/view/Seting/ChangePassword.js in folder common */
/*
 * File: app/view/MyFormPanel18.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcApprove.view.Seting.ChangePassword', {
    extend: 'Ext.form.Panel',
    id:'ChangePassword',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.form.FieldSet',
        'Ext.field.Password',
        'Ext.Spacer'
    ],

    config: {
        items: [
            /*
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '修改密码',
                items: [
                    {
                        xtype: 'button',
                        id:'btn_changepassword_back',
                        ui: 'back',
                        text: '返回'
                    }
                ]
            },
            */
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '修改密码',
                items: [
                    {
                        xtype: 'button',
                        id:'btn_changepassword_back',
                        ui: 'back',
                        text: '返回'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        id:'btn_changepassword_confirm',
                        text: '保存'
                    },
                    {
                        xtype: 'button',
                        id:'btn_changepassword_cancel',
                        text: '复原'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                margin: '0 auto 0 auto',
                //width: 407,
                title: '<font color=red>您即将修改用户 <span id="spn_changePwd_userid"></span> 的密码，请务必牢记密码！</font>',
                items: [
                    {
                        xtype: 'passwordfield',
                        id:'old_password',
                        label: '旧密码',
                        placeHolder: '请输入旧密码'
                    },
                    {
                        xtype: 'passwordfield',
                        id:'new_password',
                        label: '新密码',
                        placeHolder: '请输入新密码'
                    },
                    {
                        xtype: 'passwordfield',
                        id:'conf_password',
                        label: '密码确认',
                        placeHolder: '请输入新密码确认'
                    }
                ]
            },
            /*
            {
                xtype: 'container',
                margin: 15,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'spacer',
                        style: 'float: left'
                    },
                    {
                        xtype: 'button',
                        id:'btn_changepassword_cancel',
                        centered: false,
                        style: 'float: left',
                        text: '取　　消'
                    },
                    {
                        xtype: 'spacer',
                        style: 'float: left'
                    },
                    {
                        xtype: 'button',
                        id:'btn_changepassword_confirm',
                        style: 'float: left',
                        text: '确认修改'
                    },
                    {
                        xtype: 'spacer',
                        style: 'float: left'
                    }
                ]
            }
            */
        ]
    }

});