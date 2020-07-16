export function rShow<T>(r_show:boolean = false,component:T):T|null{
    return r_show ?  component:null
}