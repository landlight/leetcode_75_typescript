class Solution(object):
    def compress(self, chars):
        """
        :type chars: List[str]
        :rtype: int
        """

        read, write = 0, 0
        while read < len(chars):
            chars[write] = chars[read]
            count = 1

            while read + 1 < len(chars) and chars[read] == chars[read + 1]:
                read += 1
                count += 1

            if count > 1:
                for c in str(count):
                    chars[write + 1] = c
                    write += 1

            read += 1
            write += 1

        return write
