# MySQL索引失效的几种情况

### 1. 违反 **最左匹配原则** 。

> 如果索引了多列，要遵守最左前缀原则。指的是查询要从索引的最左前列开始并且不跳过索引中的列

### 2. 在 **索引列上操作**。

> 如子索引列上进行计算、函数、自动或手动类型转换

### 3. 使用 **不等于** （`!=` 或 `<>`等）。

### 4. 使用 `or` 。

### 5. like查询 **是以 `'%'`开头** 。

### 6. **使用 `<`,`>`、`between、and`**。

> 存储引擎不能使用索引中范围条件右边的列，无法重建索引

### 7. 字符串不加 **单引号** 。

> 自动类型转换

### 8. **order by / group by**。

> 含非索引字段分组排序，导致索引失效

### 9. 使用 **select** 。