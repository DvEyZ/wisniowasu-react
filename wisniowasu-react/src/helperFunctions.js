function exists(obj)
{
    if (obj == null) return false;
    if (obj == undefined) return false;
    if (obj == false) return false;
    if (obj == 0) return false;
    if (obj == "") return false;
    if (obj == []) return false;
    return true;
}