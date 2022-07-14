/**
 * [default description]
 * @param   {string}  tag - The tag to delete to the list of tags
 * @param   {array}  tags     - The list of tags
 * @param   {function}  setTags  - The function to update the list of tags
 * @return  {Array} - The list of tags without the tag to delete
 */
export default function deleteTag(tag, tags, setTags) {
  return setTags(tags.filter((t) => t !== tag));
}
